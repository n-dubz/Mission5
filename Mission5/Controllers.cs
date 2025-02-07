using Microsoft.AspNetCore.Mvc;

namespace Mission5.Controllers
{
    public class HomeController : Controller
    {
        // GET: /Home/Index
        [HttpGet]
        public IActionResult Index()
        {
            // Renders /Views/Home/Index.cshtml by default
            return View();
        }

        // GET: /Home/Calculator
        [HttpGet]
        public IActionResult Calculator()
        {
            // Renders /Views/Home/Calculator.cshtml by default
            return View();
        }
    }
}