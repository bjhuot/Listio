using System;

namespace Listio.Models
{
    public class Todo
    {
        public Guid Id { get; set; } = new Guid();
        public string Name { get; set; }
        public string Detail { get; set; } = null;
        public string Tag { get; set; } = null;
        public bool IsComplete { get; set; } = false;
        public DateTime Created { get; set; } = new DateTime().Date;
        public DateTime Due { get; set; } = new DateTime(0).Date;
    }
}
