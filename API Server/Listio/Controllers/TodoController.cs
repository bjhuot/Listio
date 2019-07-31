using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Listio.Models;
using Microsoft.Extensions.Configuration;
using LiteDB;

namespace Listio.Controllers
{
    [Route("api/todo")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private readonly IConfiguration _configuration;  //Imports configuration to make connection string available; each HTTP method makes it's own call
                                                         //to the database due to access conflicts with .NET Core and LiteDB requiring exclusivity.

        public TodoController(IConfiguration configuration)
        {
            _configuration = configuration;

        }

        // GET: api/todo  //Returns entire list of Todo items
        [HttpGet]
        public ActionResult<IEnumerable<Todo>> GetTodoItems()
        {
            string connectionString = _configuration.GetSection("ConnectionStrings").GetChildren().FirstOrDefault()?.Value;
            using (var db = new LiteDatabase(connectionString))
            {
                var col = db.GetCollection<Todo>("Todo");
                //
                return col.FindAll().ToList();
            }
        }

        // GET: api/todo/5  //Returns single Todo item
        [HttpGet("{id}")]
        public ActionResult<Todo> GetTodoItem(string id)
        {
            string connectionString = _configuration.GetSection("ConnectionStrings").GetChildren().FirstOrDefault()?.Value;
            using (var db = new LiteDatabase(connectionString))
            {
                var col = db.GetCollection<Todo>("Todo");
                //

                col.EnsureIndex(x => x.Id);
                var todo = col.FindOne(x => x.Id.ToString().Contains(id));

                if (todo == null)
                {
                    return NotFound();
                }

                return todo;
            }
        }

        // POST: api/todo  //Adds new Todo item, auto-generating GUID and any blank fields.
        [HttpPost]
        public ActionResult<Todo> PostTodoItem(Todo todo)
        {
            string connectionString = _configuration.GetSection("ConnectionStrings").GetChildren().FirstOrDefault()?.Value;
            using (var db = new LiteDatabase(connectionString))
            {
                var col = db.GetCollection<Todo>("Todo");
                //

                col.Insert(todo);
                return CreatedAtAction(nameof(GetTodoItem), new { id = todo.Id }, todo);
            }
        }

        // PUT: /api/todo/5  //Edits single Todo item, checking for blank fields in modified item.
        [HttpPut("{id}")]
        public IActionResult PutTodoItem(string id, Todo todo)
        {
            string connectionString = _configuration.GetSection("ConnectionStrings").GetChildren().FirstOrDefault()?.Value;
            using (var db = new LiteDatabase(connectionString))
            {
                var col = db.GetCollection<Todo>("Todo");
                //

                col.EnsureIndex(x => x.Id);
                var todoid = col.FindOne(x => x.Id.ToString().Contains(id));

                if (todoid == null)
                {
                    return BadRequest();
                }
                if (todo.Name != null)
                {
                    todoid.Name = todo.Name;
                }
                if (todo.Detail != null)
                {
                    todoid.Detail = todo.Detail;
                }
                if (todo.Tags != null)
                {
                    todoid.Tags = todo.Tags;
                }
                if (todo.IsComplete != null)
                {
                    todoid.IsComplete = todo.IsComplete;
                }
                if (todo.DateDue != null)
                {
                    todoid.DateDue = todo.DateDue;
                }
                if (todo.TimeDue != null)
                {
                    todoid.TimeDue = todo.TimeDue;
                }
                todoid.DateCreated = todoid.DateCreated;
                todoid.TimeCreated = todoid.TimeCreated;

                col.Update(todoid);
                return NoContent();

            }
        }

        // DELETE: /api/todo/5  //Deletes single item.
        [HttpDelete("{id}")]
        public IActionResult DeleteTodoItem(string id)
        {
            string connectionString = _configuration.GetSection("ConnectionStrings").GetChildren().FirstOrDefault()?.Value;
            using (var db = new LiteDatabase(connectionString))
            {
                var col = db.GetCollection<Todo>("Todo");
                //

                col.EnsureIndex(x => x.Id);
                var todoid = col.FindOne(x => x.Id.ToString().Contains(id));

                if (todoid == null)
                {
                    return NotFound();
                }

                col.Delete(todoid.Id);
                return NoContent();
            }
        }
    }
}
