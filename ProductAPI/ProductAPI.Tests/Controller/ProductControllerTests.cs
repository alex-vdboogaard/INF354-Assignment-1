﻿using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProductAPI.Controllers;
using ProductAPI.Data;
using ProductAPI.Models;
using Xunit;

namespace ProductAPI.Tests.Controller
{
    public class ProductControllerTests
    {
        private readonly ApplicationDbContext _context;
        private readonly ProductsController _controller;

        public ProductControllerTests()
        {
            // Create a unique in-memory database for each test
            var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                            .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString()) // Unique DB for each test
                            .Options;

            // Initialize the DbContext with the in-memory database
            _context = new ApplicationDbContext(options);

            // Initialize the controller with the in-memory context
            _controller = new ProductsController(_context);
        }

        [Fact]
        public async Task GetProducts_ReturnsNotNull()
        {
            // Arrange: Add some data to the in-memory database
            var products = new List<Product>
            {
                new Product { Id = 1, Name = "Product 1", Description="My description", Price = 10 },
                new Product { Id = 2, Name = "Product 2", Description="My second description", Price = 20 }
            };

            _context.Product.AddRange(products);
            await _context.SaveChangesAsync();

            // Act: Call the GetProducts method
            var result = await _controller.GetProduct();

            // Assert: Check that the result is not null and contains two products
            var actionResult = Assert.IsType<ActionResult<IEnumerable<Product>>>(result);
            var model = Assert.IsAssignableFrom<List<Product>>(actionResult.Value);
            Assert.NotEmpty(model);
            Assert.Equal(2, model.Count);
        }

        [Fact]
        public async Task GetProductById_ReturnsProductIfItExists()
        {
            // Arrange: Add a product to the in-memory database
            var product = new Product { Id = 1, Name = "Product 1", Description = "My description", Price = 10 };
            _context.Product.Add(product);
            await _context.SaveChangesAsync();

            // Act: Call the GetProduct method with the existing product ID
            var result = await _controller.GetProduct(1);

            // Assert: Check that the result is the correct product
            var actionResult = Assert.IsType<ActionResult<Product>>(result);
            var model = Assert.IsAssignableFrom<Product>(actionResult.Value);
            Assert.Equal(1, model.Id);
            Assert.Equal("Product 1", model.Name);
        }
    }
}

