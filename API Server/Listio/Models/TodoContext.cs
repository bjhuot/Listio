using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Listio.Models;
using Listio.Controllers;
using LiteDB;


namespace Listio.Models
{
    public class TodoContext : DbContext
    {
        //Defines DB items for each controller;
        public DbSet<Todo> TodoItems { get; set; }
        public DbSet<Note> NoteItems { get; set; }
    }
}
