using System;

namespace Listio.Models
{
    public class Note
    {
        public Guid Id { get; set; } = new Guid();
        public string Name { get; set; }
        public string Body { get; set; } = null;
        public string Tag { get; set; } = null;
        public DateTime Created { get; set; } = new DateTime().Date;
    }
}
