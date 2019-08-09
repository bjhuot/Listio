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
    [Route("api/note")]
    [ApiController]
    public class NoteController : ControllerBase
    {
        private readonly IConfiguration _configuration; //Imports configuration to make connection string available; each HTTP method makes it's own call
                                                        //to the database due to access conflicts with .NET Core and LiteDB requiring exclusivity.

        public NoteController(IConfiguration configuration)
        {
            _configuration = configuration;

        }

        // GET: api/note  //Displays entire list of note items.
        [HttpGet]
        public ActionResult<IEnumerable<Note>> GetNoteItems()
        {
            string connectionString = _configuration.GetSection("ConnectionStrings").GetChildren().FirstOrDefault()?.Value;
            using (var db = new LiteDatabase(connectionString))
            {
                var col = db.GetCollection<Note>("Note");
                //
                return col.FindAll().ToList();
            }
        }

        // GET: api/Note/5  //Displays single note item.
        [HttpGet("{id}")]
        public ActionResult<Note> GetNoteItem(string id)
        {
            string connectionString = _configuration.GetSection("ConnectionStrings").GetChildren().FirstOrDefault()?.Value;
            using (var db = new LiteDatabase(connectionString))
            {
                var col = db.GetCollection<Note>("Note");
                //

                col.EnsureIndex(x => x.Id);
                var noteid = col.FindOne(x => x.Id.ToString().Contains(id));

                if (noteid == null)
                {
                    return NotFound();
                }

                return noteid;
            }
        }

        // POST: api/Note  //Adds single note item.
        [HttpPost]
        public ActionResult<Note> PostNoteItem(Note note)
        {
            string connectionString = _configuration.GetSection("ConnectionStrings").GetChildren().FirstOrDefault()?.Value;
            using (var db = new LiteDatabase(connectionString))
            {
                var col = db.GetCollection<Note>("Note");
                //

                col.Insert(note);
                return CreatedAtAction(nameof(GetNoteItem), new { id = note.Id }, note);
            }
        }

        // PUT: /api/Note/5  //Edits single note item, checking for blank fields.
        [HttpPut("{id}")]
        public IActionResult PutNoteItem(string id, Note note)
        {
            string connectionString = _configuration.GetSection("ConnectionStrings").GetChildren().FirstOrDefault()?.Value;
            using (var db = new LiteDatabase(connectionString))
            {
                var col = db.GetCollection<Note>("Note");
                //
                col.EnsureIndex(x => x.Id);
                var noteid = col.FindOne(x => x.Id.ToString().Contains(id));

                if (noteid == null)
                {
                    return BadRequest();
                }
                if (note.Name != "")
                {
                    noteid.Name = note.Name;
                }
                if (note.Body != "")
                {
                    noteid.Body = note.Body;
                }
                if (note.Tags != null)
                {
                    noteid.Tags = note.Tags;
                }
                noteid.DateCreated = noteid.DateCreated;
                noteid.TimeCreated = noteid.TimeCreated;

                col.Update(noteid);
                return NoContent();
            }
        }

        // DELETE: /api/Note/5  //Deletes single note item.
        [HttpDelete("{id}")]
        public IActionResult DeleteNoteItem(string id)
        {
            string connectionString = _configuration.GetSection("ConnectionStrings").GetChildren().FirstOrDefault()?.Value;
            using (var db = new LiteDatabase(connectionString))
            {
                var col = db.GetCollection<Note>("Note");
                //

                col.EnsureIndex(x => x.Id);
                var noteid = col.FindOne(x => x.Id.ToString().Contains(id));

                if (noteid == null)
                {
                    return NotFound();
                }

                col.Delete(noteid.Id);
                return NoContent();
            }
        }
    }
}
