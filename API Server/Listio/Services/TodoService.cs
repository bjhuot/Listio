using System;
using System.Linq;
using LiteDB;
using Listio.Models;
using System.Collections.Generic;

namespace Listio.Services
{
    public class TodoService
    {
        private readonly LiteCollection<Todo> _todo;

        public TodoService(DatabaseService ListioDb)
        {
            _todo = ListioDb.todo;
        }

        public List<Todo> Get() =>
                         _todo.FindAll().ToList();

        public Todo Get(string id)
        {
            _todo.EnsureIndex(x => x.Id);
            return _todo.FindOne(x => x.Id.Contains(id));
        }

        public Todo Create(Todo todo)
        {
            _todo.Insert(todo);
            return todo;
        }

        public Todo Update(string id, Todo todoIn)
        {
            var todo = Get(id);
            if (todo == null)
            {
                return null;
            }
            if (todoIn.Name != null)
            {
                todo.Name = todoIn.Name;
            }
            if (todoIn.Detail != null)
            {
                todo.Detail = todoIn.Detail;
            }
            if (todoIn.Tags != null)
            {
                todo.Tags = todoIn.Tags;
            }
            if (todoIn.IsComplete != null)
            {
                todo.IsComplete = todoIn.IsComplete;
            }
            if (todoIn.DateDue != null)
            {
                todo.DateDue = todoIn.DateDue;
            }
            if (todoIn.TimeDue != null)
            {
                todo.TimeDue = todoIn.TimeDue;
            }
            _todo.Update(todo);
            return todo;
        }

        public void Delete(string id)
        {
            var todo = Get(id);
            _todo.Delete(todo.Id);
        }
    }
}