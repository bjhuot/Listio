using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Listio.Models;
using Microsoft.Extensions.Configuration;
using LiteDB;

namespace Listio.Models
{
    public class Database
    {
        public Database(IConfiguration configuration)
        {
        }
    }
}