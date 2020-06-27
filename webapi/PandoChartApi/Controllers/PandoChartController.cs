using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using pando_chart_api.Database;

namespace pando_chart_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PandoChartController : ControllerBase
    {
        private readonly ILogger<PandoChartController> _logger;

        public PandoChartController(ILogger<PandoChartController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public string Get()
        {
            return "pando chart service is up and running...";
        }

        [HttpGet]
        [Route("api/get")]
        public IEnumerable<ChartData> Get(DateTime dateFrom, DateTime dateTo)
        {
            return DataProvider.GetData<ChartData>(dateFrom, dateTo);
        }
    }
}
