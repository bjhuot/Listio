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
    [Route("api/note")]
    [ApiController]
    public class NoteController : ControllerBase
    {
        private readonly NoteService _note;

        public NoteController(NoteService note)
        {
            _note = note;

        }

        // GET: api/note  //Returns entire list of Note items
        [HttpGet]
        public ActionResult<List<Note>> Get() =>
            _note.Get();

        [HttpGet("{id}")]
        public ActionResult<Note> Get(string id)
        {
            var note = _note.Get(id);

            if (note == null)
            {
                return NotFound();
            }

            return Ok(note);
        }

        // POST: api/note  //Adds new Note item, auto-generating GUID and any blank fields.
        [HttpPost]
        public ActionResult<Note> Create(Note note)
        {
            _note.Create(note);

            return Ok(note);
        }

        // PUT: /api/note/5  //Edits single Note item, checking for blank fields in modified item.
        [HttpPut("{id}")]
        public IActionResult Update(string id, Note noteIn)
        {
            var note = _note.Update(id, noteIn);
            if (note == null)
            {
                return NotFound();
            }
            return Ok(note);
        }

        // DELETE: /api/note/5  //Deletes single item.
        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            if (_note.Get(id) == null)
            {
                return NotFound();
            }
            _note.Delete(id);
            return new OkResult();
        }
    }
}
