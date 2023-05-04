﻿namespace FR.Services.Interfaces
{
    public interface IRepository<T> where T : class
    {
        T Add(T entity);
        void Remove(T entity);
        void RemoveRange(IEnumerable<T> entity);
        IEnumerable<T> GetAll();
    }
}