namespace Lab12.Models
{
    public class Model
    {
        public int a { get; set; }
        public int b { get; set; }
        public string operation { get; set; }

        public string Evaluate()
        {
            return operation switch
            {
                "+" => $"{a} + {b} = {a + b}",
                "-" => $"{a} - {b} = {a - b}",
                "*" => $"{a} * {b} = {a * b}",
                "/" when b != 0 => $"{a} / {b} = {(float)a / b}",
                "/" when b == 0 => "Деление на 0",
                _ => "Ошибка"
            };
        }
    }
}