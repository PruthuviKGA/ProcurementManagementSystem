﻿namespace PWMSBackend.Models
{
    public class MasterProcurementPlanStatus
    {
        public string MPPId { get; set; }
        public string StatusId { get; set; }
        public DateTime Date { get; set; }

        public MasterProcurementPlan MasterProcurementPlan { get; set; }
        public Status Status { get; set; }
    }
}