using System.Linq;
using DNR.Business.Services.Interfaces;
using DNR.Data;
using DNR.Data.Models;

namespace DNR.Business.Services
{
    public class SimpleTestService : ISimpleTestService
    {
        private readonly ApplicationDbContext _db;

        public SimpleTestService(ApplicationDbContext dbContext)
        {
            _db = dbContext;
        }

        public TestModel GetTestModel()
        {
            return _db.Tests.FirstOrDefault();
        }
    }
}