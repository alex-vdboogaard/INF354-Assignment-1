-- Check if database exists and drop it safely
IF EXISTS (SELECT * FROM sys.databases WHERE name = 'Products')
BEGIN
    -- Set database to SINGLE_USER mode to force disconnect active connections
    ALTER DATABASE Products SET SINGLE_USER WITH ROLLBACK IMMEDIATE;
    
    -- Drop the database
    DROP DATABASE Products;
END
GO

-- Create the database again
CREATE DATABASE Products;
GO

-- Use the database
USE Products;
GO

-- Create the Product table
CREATE TABLE Product (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL
);
GO

-- Insert sample data
INSERT INTO Product (name, description, price) VALUES
('Laptop', 'A high-performance laptop with 16GB RAM and 512GB SSD.', 1200.99),
('Smartphone', 'Latest model smartphone with a 6.5-inch display.', 899.50),
('Headphones', 'Noise-canceling over-ear headphones.', 199.99),
('Gaming Console', 'Next-gen gaming console with 4K support.', 499.00),
('Smartwatch', 'Waterproof smartwatch with heart rate monitoring.', 249.99);
GO
