using System.Linq.Expressions;

namespace FR.Services.Interfaces
{
    public interface IRepository<T> where T : class
    {
        T Add(T entity);
        T Remove(T entity);
        void RemoveRange(IEnumerable<T> entity);
        IEnumerable<T> GetAll();
        T GetFirstOrDefault(Expression<Func<T, bool>>? filter= null);
    }
}
