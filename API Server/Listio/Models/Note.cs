using System;
using LiteDB;

namespace Listio.Models
{
    public class Note
    {
        [BsonId]
        public string Id { get; set; } = DateTime.Now.Ticks.ToString();
        public string Name { get; set; }
        public string Body { get; set; } = null;
        public string[] Tags { get; set; } = null;
        public string DateCreated { get; set; } = DateTime.Now.ToShortDateString();
        public string TimeCreated { get; set; } = DateTime.Now.ToShortTimeString();
    }
}
