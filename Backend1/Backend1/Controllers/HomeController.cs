using Backend1.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace Backend1.Controllers
{
    public class HomeController : Controller
    {
         
        private Random rand = new Random();
        public int a;
        public int b;
        public string add;
        public string sub;
        public string mult;
        public string div;

        public HomeController()
        {
            a = rand.Next(0, 11);
            b = rand.Next(0, 11);
            add = $"{a} + {b} = {a + b}";
            sub = $"{a} - {b} = {a - b}";
            mult = $"{a} * {b} = {a * b}";
            if (b == 0)
            {
                div = $"{a} / {b} = Деление на ноль";
            }
            else
            {
                div = $"{a} / {b} = {(double)a / b}";
            }
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult PassUsingModel()
        {
            var calcModel = new CalcModel(a, b, add, sub, mult, div);
            return View(calcModel);
        }

        public IActionResult PassUsingViewData()
        {
            ViewData["a"] = a;
            ViewData["b"] = b;
            ViewData["add"] = add;
            ViewData["sub"] = sub;
            ViewData["mult"] = mult;
            ViewData["div"] = div;
            return View();
        }

        public IActionResult PassUsingViewBag()
        {
            ViewBag.a = a;
            ViewBag.b = b;
            ViewBag.add = add;
            ViewBag.sub = sub;
            ViewBag.mult = mult;
            ViewBag.div = div;
            return View();
        }

        public IActionResult AccessServiceDirectly()
        {
            return View(this);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}