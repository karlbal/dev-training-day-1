using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication_Day_1.Models;

namespace WebApplication_Day_1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly NorthwindContext _northwindContext;

        public ProductController(NorthwindContext northwindContext)
        {
            _northwindContext = northwindContext;
        }

        [HttpGet()]
        public List<Product> GetAll()
        {
            return _northwindContext.Products.Include(b=> b.Supplier).ToList();
        }

        [HttpPost()]
        public async Task<Product> Post(Product newProduct)
        {
            _northwindContext.Products.Add(newProduct);

            await _northwindContext.SaveChangesAsync();

            return newProduct;
        }

        [HttpPut()]
        public async Task<Product> Update(Product updateProduct)
        {
            var product = await _northwindContext.Products.FindAsync(updateProduct.ProductId);

            product.ProductName = updateProduct.ProductName;
            product.QuantityPerUnit = updateProduct.QuantityPerUnit;
            product.ReorderLevel = updateProduct.ReorderLevel;
            product.SupplierId = updateProduct.SupplierId;

            await _northwindContext.SaveChangesAsync();

            return product;
        }

        [HttpDelete("{productId}")]
        public async Task<bool> Delete(int productId)
        {
            var product = await _northwindContext.Products.FindAsync(productId);

            _northwindContext.Products.Remove(product);

            await _northwindContext.SaveChangesAsync();

            return true;
        }



    }
}
