using Microsoft.Data.SqlClient;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Reflection;

namespace PandDB
{
    public class DataAccess
    {
        static string localDir = Directory.GetCurrentDirectory().Replace("PandoChartApi", @"PandDB\PandoLogic.mdf");
        static string connectionString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=" + localDir + ";Integrated Security=True";

        public static List<T> ConvertDataTable<T>(DataTable dt)
        {
            List<T> data = new List<T>();
            foreach (DataRow row in dt.Rows)
            {
                T item = GetItem<T>(row);
                data.Add(item);
            }
            return data;
        }

        private static object GetValueByDataType(Type propertyType, object o)
        {
            if (o.ToString() == "null")
            {
                return null;
            }
            if (propertyType == (typeof(Guid)) || propertyType == typeof(Guid?))
            {
                return Guid.Parse(o.ToString());
            }
            else if (propertyType == typeof(int) || propertyType.IsEnum)
            {
                return Convert.ToInt32(o);
            }
            else if (propertyType == typeof(decimal))
            {
                return Convert.ToDecimal(o);
            }
            else if (propertyType == typeof(long))
            {
                return Convert.ToInt64(o);
            }
            else if (propertyType == typeof(bool) || propertyType == typeof(bool?))
            {
                return Convert.ToBoolean(o);
            }
            else if (propertyType == typeof(DateTime) || propertyType == typeof(DateTime?))
            {
                return Convert.ToDateTime(o);
            }
            return o.ToString();
        }

        private static T GetItem<T>(DataRow dr)
        {
            Type temp = typeof(T);
            T obj = Activator.CreateInstance<T>();

            foreach (DataColumn column in dr.Table.Columns)
            {
                foreach (PropertyInfo pro in temp.GetProperties())
                {
                    if (pro.Name == column.ColumnName)
                    {
                        try
                        {
                            var convertedValue = GetValueByDataType(pro.PropertyType, dr[column.ColumnName]);
                            pro.SetValue(obj, convertedValue, null);
                        }
                        catch (Exception e)
                        {
                            //ex handle code                   
                            throw;
                        }
                        //pro.SetValue(obj, dr[column.ColumnName], null);
                    }
                    else
                        continue;
                }
            }
            return obj;
        }

        public IEnumerable<T> ExecuteQuery<T>(string CommandText, List<SqlParameter> sqlParams)
        {
            SqlConnection connection = new SqlConnection(connectionString);
            SqlCommand cmd = new SqlCommand();
            DataTable dataTable = new DataTable();
            cmd.Connection = connection;

            connection.Open();
            cmd.CommandText = CommandText;
            cmd.Parameters.AddRange(sqlParams.ToArray());

            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dataTable);
            connection.Close();
            da.Dispose();

            return ConvertDataTable<T>(dataTable); ;
        }
    }
}
