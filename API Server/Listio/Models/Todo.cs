using System;
using LiteDB;

namespace Listio.Models
{
    public class Todo
    {
        [BsonId]
        public string Id { get; set; } = DateTime.Now.Ticks.ToString();
        public string Name { get; set; }
        public string Detail { get; set; } = null;
        public string[] Tags { get; set; }
        public bool IsComplete { get; set; } = false;
        public string DateCreated { get; set; } = DateTime.Now.ToShortDateString();
        public string TimeCreated { get; set;} = DateTime.Now.ToShortTimeString();
        public string DateDue { get; set; } = new DateTime(0).ToShortDateString();
        public string TimeDue { get; set; } = new DateTime(0).ToShortTimeString();
    }
}
