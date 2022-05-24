using CategoryProduct.Entities.Abstracts;
using System;
using System.Linq;
using System.Linq.Expressions;

namespace CategoryProduct.Business.Abstracts
{
    public interface IRepository<TEntity> where TEntity : BaseEntity
    {
        TEntity GetById(int id);
        int Insert(TEntity entity, bool isSaveLater = false);
        int Update(TEntity entity, bool isSaveLater = false);

        int Delete(int id, bool isSaveLater = false);
        int Save();
        IQueryable<TEntity> Get(Expression<Func<TEntity, bool>> predicate = null);
    }
}