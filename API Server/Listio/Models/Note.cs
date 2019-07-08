using System;

namespace Listio.Models
{
    public class Note
    {
        public Guid Id { get; set; } = new Guid();
        public string Name { get; set; }
        public string Body { get; set; } = null;
        public string[] Tags { get; set; } = null;
        public string DateCreated { get; set; } = new DateTime().ToLocalTime().ToShortDateString();
        public string TimeCreated { get; set; } = new DateTime().ToLocalTime().ToShortTimeString();
    }
}
