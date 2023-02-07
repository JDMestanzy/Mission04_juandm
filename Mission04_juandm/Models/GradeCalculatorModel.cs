using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_juandm.Models
{
    public class GradeCalculatorModel
    {
        [Required]
        public int Assignment { get; set; }
        public int GroupProject { get; set; }
        public int Quiz { get; set; }
        public int Midterm { get; set; }
        public int Final { get; set; }

        public int Intex { get; set; }

    }
}
