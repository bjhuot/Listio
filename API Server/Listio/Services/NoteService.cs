using System;
using System.Linq;
using LiteDB;
using Listio.Models;
using System.Collections.Generic;

namespace Listio.Services
{
    public class NoteService
    {
        private readonly LiteCollection<Note> _note;

        public NoteService(DatabaseService ListioDb)
        {
            _note = ListioDb.note;
        }

        public List<Note> Get() =>
                         _note.FindAll().ToList();

        public Note Get(string id)
        {
            _note.EnsureIndex(x => x.Id);
            return _note.FindOne(x => x.Id.Contains(id));
        }

        public Note Create(Note note)
        {
            _note.Insert(note);
            return note;
        }

        public Note Update(string id, Note noteIn)
        {
            var note = Get(id);
            if (note == null)
            {
                return null;
            }
            if (noteIn.Name != null)
            {
                note.Name = noteIn.Name;
            }
            if (noteIn.Body != null)
            {
                note.Body = noteIn.Body;
            }
            if (noteIn.Tags != null)
            {
                note.Tags = noteIn.Tags;
            }
            _note.Update(note);
            return note;
        }

        public void Delete(string id)
        {
            var note = Get(id);
            _note.Delete(note.Id);
        }
    }
}