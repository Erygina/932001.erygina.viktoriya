namespace Lab13.Model
{
    public class Model
    {
        string[] operations = { "+", "-", "*" };

        private int a;
        private int b;
        private string operation;
        private int rightAnswer { get; set; }
        public string question;
        public List<string> Results { get; set; } = new List<string>();

        public int answersCount = 0;
        public int rightAnswersCount = 0;


        public void SetRandomValues()
        {
            Random rand = new Random();
            a = rand.Next(0, 20);
            b = rand.Next(0, 20);
            operation = operations[rand.Next(0, 3)];
            switch (operation)
            {
                case "+":
                    rightAnswer = a + b; break;
                case "-":
                    rightAnswer = a - b; break;
                case "*":
                    rightAnswer = a * b; break;
            };
            question = $"{a} {operation} {b} = ";
        }

        public void UpdateResults(int answer)
        {
            answersCount++;
            if (answer == rightAnswer)
            {
                rightAnswersCount++;
            }
            Results.Add($"{question} {answer}");
        }
    }
}