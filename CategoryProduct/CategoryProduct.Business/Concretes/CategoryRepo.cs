using CategoryProduct.Business.Abstracts;
using CategoryProduct.DataAccess;
using CategoryProduct.Entities;

namespace CategoryProduct.Business.Concretes
{
    public class CategoryRepo : BaseRepository<Category>
    {
        public CategoryRepo(MyContext context) : base(context)
        {

        }
    }
}