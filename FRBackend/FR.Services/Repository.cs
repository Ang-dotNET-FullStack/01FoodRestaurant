using FR.DataAccess.Data;
using FR.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

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

        public T GetFirstOrDefault(Expression<Func<T, bool>>? filter = null)
        {
            IQueryable<T> query = dbSet;
            if(filter != null)
            {
                query = query.Where(filter);
            }
            return query.FirstOrDefault();
        }

        public T Remove(T entity)
        {
            dbSet.Remove(entity);
            return entity;
        }

        public void RemoveRange(IEnumerable<T> entity)
        {
            dbSet.RemoveRange(entity);
        }

        public void Save()
        {
            _db.SaveChanges();
        }
    }
}
