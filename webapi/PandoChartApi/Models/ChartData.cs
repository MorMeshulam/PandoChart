using System;

namespace pando_chart_api
{
    public class ChartData
    {
        public int AllJobs { get; set; }
        public int ComulativeJobsView { get; set; }
        public int PredictableJobsView { get; set; }
        public DateTime ViewDate { get; set; }
    }
}

public enum Type {
    AllJobs = 1,
    ComulativeJobsView = 2,
    PredictableJobsView = 3
}
