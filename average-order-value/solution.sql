SELECT
  c.name,
  SUM(ol.unit_price*ol.quantity) AS total_order_value,
  s.order_count,
  SUM(ol.unit_price*ol.quantity)/s.order_count AS avg_order_value
FROM (
  SELECT customer_id, COUNT(order_id) AS 'order_count' FROM orders GROUP by customer_id
) s, order_line_items AS ol, orders AS o, customers AS c
WHERE c.customer_id = o.customer_id AND ol.order_id = o.order_id AND s.customer_id = o.customer_id
GROUP BY c.customer_id
ORDER BY avg_order_value DESC