using Microsoft.Data.SqlClient;
using PandDB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace pando_chart_api.Database
{
    public static class DataProvider
    {
        public static DataAccess pandoDb = new DataAccess();
        
        public static IEnumerable<T> GetData<T>(DateTime dateFrom, DateTime dateTo)
        {
            int predictableRange = 20;
            string query = "SELECT " +
                           "count(DISTINCT  j.id) as AllJobs, " +
                           "count(j.id) as ComulativeJobsView, " +
                           "1.0 + floor(" + predictableRange + " * RAND(convert(varbinary, newid()))) as PredictableJobsView, " +
                           "v.view_date as ViewDate " +
                           "FROM Jobs j " +
                           "inner join Views v on j.id = v.job_id " +
                           "where v.view_date between " +
                           "DATEADD(day, -30, @from) and @to " +
                           "group by v.view_date";

            SqlParameter p1 = new SqlParameter("@from", System.Data.SqlDbType.DateTime);
            p1.Value = dateFrom;
            SqlParameter p2 = new SqlParameter("@to", System.Data.SqlDbType.DateTime);
            p2.Value = dateTo;

            return pandoDb.ExecuteQuery<T>(query, new List<SqlParameter> { p1, p2 }); ;
        }
    }
}
