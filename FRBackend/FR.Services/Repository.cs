using FR.DataAccess.Data;
using FR.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace FR.Services
{
    public class Repository<T> : IRepository<T> where T : class
    {
        private readonly FRDbContext _db;
        internal DbSet<T> dbSet;
        public Repository(FRDbContext db)
        {
            _db = db;
            this.dbSet = db.Set<T>();
        }
        public T Add(T entity)
        {
            dbSet.Add(entity);
            return entity;
        }

        public IEnumerable<T> GetAll()
        {
            IQueryable<T> query = dbSet;
            return query.ToList();
        }

        public void Remove(T entity)
        {
            dbSet.Remove(entity);
        }

        public void RemoveRange(IEnumerable<T> entity)
        {
            dbSet.RemoveRange(entity);
        }
    }
}
