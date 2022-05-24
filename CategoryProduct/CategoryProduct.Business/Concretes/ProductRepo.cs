using CategoryProduct.Business.Abstracts;
using CategoryProduct.DataAccess;
using CategoryProduct.Entities;

namespace CategoryProduct.Business.Concretes
{
    public class ProductRepo : BaseRepository<Product>
    {
        public ProductRepo(MyContext context) : base(context)
        {

        }
    }
}