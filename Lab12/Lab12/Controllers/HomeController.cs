using Lab12.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace Lab12.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Manual()
        {
            if (Request.Method == "POST")
            {
                try
                {
                    var calculator = new Model
                    {
                        a = Int32.Parse(HttpContext.Request.Form["a"]),
                        b = Int32.Parse(HttpContext.Request.Form["b"]),
                        operation = HttpContext.Request.Form["operation"],                      
                    };
                    ViewData["Result"] = calculator.Evaluate();
                }
                catch
                {
                    ViewData["Result"] = "Invalid";
                }

                return View("Result");
            }
            return View("Forms");
        }

        [HttpGet]
        [ActionName("ManualWithSeparateHandlers")]
        public IActionResult ManualWithSeparateHandlersGet()
        {
            return View("Forms");
        }

        [HttpPost]
        [ActionName("ManualWithSeparateHandlers")]
        public IActionResult ManualWithSeparateHandlersPost()
        {
            try
            {
                var calculator = new Model
                {
                    a = Int32.Parse(HttpContext.Request.Form["a"]),
                    b = Int32.Parse(HttpContext.Request.Form["b"]),
                    operation = HttpContext.Request.Form["operation"]
                };

                ViewData["Result"] = calculator.Evaluate();
            }
            catch
            {
                ViewData["Result"] = "Invalid";
            }

            return View("Result");
        }

        [HttpGet]
        [ActionName("ModelBindingInParameters")]
        public IActionResult ModelBindingInParametersGet()
        {
            return View("Forms");
        }

        [HttpPost]
        [ActionName("ModelBindingInParameters")]
        public IActionResult ModelBindingInParametersPost(int a, int b, string operation)
        {
            if (ModelState.IsValid)
            {
                var calculator= new Model
                {
                    a = a,
                    b = b,
                    operation = operation
                };

                ViewData["Result"] = calculator.Evaluate();
            }
            else
            {
                ViewData["Result"] = "Invalid";
            }

            return View("Result");
        }

        [HttpGet]
        [ActionName("ModelBindingInSeparateModel")]
        public IActionResult ModelBindingInSeparateModelGet()
        {
            return View("Forms");
        }

        [HttpPost]
        [ActionName("ModelBindingInSeparateModel")]
        public IActionResult ModelBindingInSeparateModelPost(Model model)
        {
            if (ModelState.IsValid)
            {
                ViewData["Result"] = model.Evaluate();
            }
            else
            {
                ViewData["Result"] = "Invalid input";
            }

            return View("Result");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}