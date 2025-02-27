﻿using ProductAPI.Models;
using System.ComponentModel.DataAnnotations;

namespace ProductAPI.Models
{
    public class Course
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string CourseName { get; set; } = string.Empty;

        public int StudentId { get; set; }

        public Student? Student { get; set; }
    }
}

