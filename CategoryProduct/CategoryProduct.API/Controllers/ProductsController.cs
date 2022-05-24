using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CategoryProduct.DataAccess;
using CategoryProduct.Entities;
using CategoryProduct.Business.Concretes;

namespace CategoryProduct.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly ProductRepo _productRepo;

        public ProductsController(ProductRepo productRepo)
        {
            _productRepo = productRepo;
        }

        // GET: api/Products
        [HttpGet]
        public IActionResult GetProducts()
        {
            List<Product> products = _productRepo.Get().ToList();
            return Ok(products);
        }

        // GET: api/Products/5
        [HttpGet("{id}")]
        public IActionResult GetProduct(int id)
        {
            var product = _productRepo.GetById(id);

            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }

        // PUT: api/Products/5
        [HttpPut("{id}")]
        public IActionResult PutProduct(int id, Product product)
        {
            if (id != product.Id)
            {
                return BadRequest();
            }
            try
            {
                _productRepo.Update(product);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(product);
        }

        // POST: api/Products
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public ActionResult PostProduct(Product product)
        {
            _productRepo.Insert(product);

            return CreatedAtAction("GetProduct", new { id = product.Id }, product);
        }

        // DELETE: api/Products/5
        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(int id)
        {
            var product = _productRepo.GetById(id);
            if (product == null)
            {
                return NotFound();
            }

            _productRepo.Delete(product.Id);

            return NoContent();
        }

        private bool ProductExists(int id)
        {
            return _productRepo.Get().Any(e => e.Id == id);
        }
    }
}
