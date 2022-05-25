using CategoryProduct.Business.Concretes;
using CategoryProduct.Entities;
using CategoryProduct.Entities.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace CategoryProduct.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly CategoryRepo _categoryRepo;

        public CategoriesController(CategoryRepo categoryRepo)
        {
            _categoryRepo = categoryRepo;
        }

        // GET: api/Categories
        [HttpGet]
        public IActionResult GetCategories()
        {
            List<Category> categories = _categoryRepo.Get().Include(x => x.Products).ToList();

            List<CategoryDto> categoryDtos = new List<CategoryDto>();
            foreach (var item in categories)
            {
                categoryDtos.Add(new CategoryDto
                {
                    Id = item.Id,
                    Name = item.Name,
                    Description = item.Description,
                    CategoryNumber = item.Products.Count
                });
            }
            return Ok(categoryDtos);
        }

        // GET: api/Categories/5
        [HttpGet("{id}")]
        public IActionResult GetCategory(int id)
        {
            var category = _categoryRepo.GetById(id);

            if (category == null)
            {
                return NotFound();
            }

            return Ok(category);
        }

        // PUT: api/Categories/5
        [HttpPut("{id}")]
        public IActionResult PutCategory(int id,Category category)
        {
            if (id != category.Id)
            {
                return BadRequest();
            }
            try
            {
                _categoryRepo.Update(category);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CategoryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(category);
        }

        // POST: api/Categories
        [HttpPost]
        public ActionResult PostCategory(Category category)
        {
            _categoryRepo.Insert(category);

            return CreatedAtAction("GetCategory", new { id = category.Id }, category);
        }

        // DELETE: api/Categories/5
        [HttpDelete("{id}")]
        public IActionResult DeleteCategory(int id)
        {
            var category = _categoryRepo.GetById(id);
            if (category == null)
            {
                return NotFound();
            }

            _categoryRepo.Delete(category.Id);

            return NoContent();
        }

        private bool CategoryExists(int id)
        {
            return _categoryRepo.Get().Any(e => e.Id == id);
        }
    }
}
