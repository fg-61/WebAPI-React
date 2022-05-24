using CategoryProduct.DataAccess;
using CategoryProduct.Entities.Abstracts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Linq.Expressions;

namespace CategoryProduct.Business.Abstracts
{
    public abstract class BaseRepository<TEntity> : IRepository<TEntity> where TEntity : BaseEntity
    {
        protected readonly MyContext Context;
        protected DbSet<TEntity> Table { get; }
        public BaseRepository(MyContext context)
        {
            Context = context;
            Table = Context.Set<TEntity>();//Veri tabanındaki tabloların propertileri ile eşliyor
        }
        public TEntity GetById(int id)
        {
            return Table.Find(id);
        }

        public int Insert(TEntity entity, bool isSaveLater = false)
        {
            Table.Add(entity);
            if (!isSaveLater)
                Save();
            return entity.Id;
        }
        public int Delete(int id, bool isSaveLater = false)
        {
            var entity = Table.Find(id);
            Table.Remove(entity);
            return isSaveLater ? 0 : Save();

        }
        public IQueryable<TEntity> Get(Expression<Func<TEntity, bool>> predicate = null)
        {
            return predicate == null ? Table : Table.Where(predicate);
        }
        public int Update(TEntity entity, bool isSaveLater = false)
        {
            Table.Update(entity);
            return isSaveLater ? 0 : Save();
        }
        public int Save()
        {
            return Context.SaveChanges();
        }
    }
}