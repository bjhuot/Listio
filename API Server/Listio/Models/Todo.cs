using System;

namespace Listio.Models
{
    public class Todo
    {
        public Guid Id { get; set; } = new Guid();
        public string Name { get; set; }
        public string Detail { get; set; } = null;
        public string[] Tags { get; set; }
        public bool IsComplete { get; set; } = false;
        public string DateCreated { get; set; } = new DateTime().ToLocalTime().ToShortDateString();
        public string TimeCreated { get; set;} = new DateTime().ToLocalTime().ToShortTimeString();
        public string DateDue { get; set; } = new DateTime(0).ToShortDateString();
        public string TimeDue { get; set; } = new DateTime(0).ToShortTimeString();
    }
}
