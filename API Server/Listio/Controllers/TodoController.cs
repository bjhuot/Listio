using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Listio.Models;
using Microsoft.Extensions.Configuration;
using LiteDB;
using Listio.Services;

namespace Listio.Controllers
{
    [Route("api/todo")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private readonly TodoService _todo;

        public TodoController(TodoService todo)
        {
            _todo = todo;

        }

        // GET: api/todo  //Returns entire list of Todo items
        [HttpGet]
        public ActionResult<List<Todo>> Get() =>
            _todo.Get();

        [HttpGet("{id}")]
        public ActionResult<Todo> Get(string id) 
        {
            var todo = _todo.Get(id);

            if (todo == null)
            {
                return NotFound();
            }

            return Ok(todo);
        }

        // POST: api/todo  //Adds new Todo item, auto-generating GUID and any blank fields.
        [HttpPost]
        public ActionResult<Todo> Create(Todo todo)
        {
            _todo.Create(todo);

            return Ok(todo);
        }

        // PUT: /api/todo/5  //Edits single Todo item, checking for blank fields in modified item.
        [HttpPut("{id}")]
        public IActionResult Update(string id, Todo todoIn)
        {
            var todo = _todo.Update(id, todoIn);
            if (todo == null)
            {
                return NotFound();
            }
            return Ok(todo);
        }

        // DELETE: /api/todo/5  //Deletes single item.
        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            if(_todo.Get(id) == null)
            {
                return NotFound();
            }
            _todo.Delete(id);
            return new OkResult();
        }
    }
}
