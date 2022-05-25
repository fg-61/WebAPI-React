using CategoryProduct.Business.Abstracts;
using CategoryProduct.DataAccess;
using CategoryProduct.Entities;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace CategoryProduct.Business.Concretes
{
    public class ProductRepo : BaseRepository<Product>
    {
        public ProductRepo(MyContext context) : base(context)
        {

        }

        public IQueryable<Product> GetProductsWithCategory()
        {
            return Table.Include(x => x.Category);
        }

    }
}