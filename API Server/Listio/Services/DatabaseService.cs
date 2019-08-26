using System;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System.Linq;
using LiteDB;
using Listio.Models;

namespace Listio.Services
{
    public class DatabaseService
    {
        public LiteCollection<Todo> todo;
        public LiteCollection<Note> note;

        public DatabaseService(IDatabaseSettings settings)
        {
            var ListioDb = new LiteDatabase(settings.ConnectionString);
            todo = ListioDb.GetCollection<Todo>("Todo");
            //note = ListioDb.GetCollection<Note>("Note");
        }
    }
}