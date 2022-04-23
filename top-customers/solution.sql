SELECT 
    strftime("%Y", o.ordered_at) AS 'year',
    strftime("%m", o.ordered_at) AS 'month',
    o.customer_id,
		MAX(t.total_monthly_order_value) AS total_monthly_order_value
FROM (
	SELECT order_id, SUM(unit_price*quantity) AS total_monthly_order_value
	FROM order_line_items
	GROUP BY order_id
) t, orders AS o, customers AS c
WHERE o.customer_id = c.customer_id AND t.order_id = o.order_id
GROUP BY strftime("%m-%Y", o.ordered_at)
ORDER BY strftime("%m-%Y", o.ordered_at) ASC -- or 'year' month'