using CategoryProduct.Business.Concretes;
using Microsoft.Extensions.DependencyInjection;

namespace CategoryProduct.API.Extensions
{
    public static class AppRepositories
    {
        public static IServiceCollection AddAppRepositories(this IServiceCollection services)
        {
            services.AddScoped<CategoryRepo>();
            services.AddScoped<ProductRepo>();
            return services;
        }
    }
}