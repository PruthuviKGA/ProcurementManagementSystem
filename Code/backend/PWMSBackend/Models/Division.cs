﻿namespace PWMSBackend.Models
{
    public class Division
    {
        public string DivisionId { get; set; }

        public string? DivisionName { get; set; }

        public ICollection<ProcurementEmployee> ProcurementEmployees { get; set; }

        //One to one relationships
        public HOD HOD { get; set; }
    }
}