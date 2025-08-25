-- Enable Row Level Security on both tables
ALTER TABLE public.tbl_customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tbl_transactions ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for tbl_customers
-- Only authenticated users can view customer data
CREATE POLICY "Authenticated users can view customers" 
ON public.tbl_customers 
FOR SELECT 
TO authenticated 
USING (true);

-- Only authenticated users can insert customer data
CREATE POLICY "Authenticated users can insert customers" 
ON public.tbl_customers 
FOR INSERT 
TO authenticated 
WITH CHECK (true);

-- Only authenticated users can update customer data
CREATE POLICY "Authenticated users can update customers" 
ON public.tbl_customers 
FOR UPDATE 
TO authenticated 
USING (true) 
WITH CHECK (true);

-- Only authenticated users can delete customer data
CREATE POLICY "Authenticated users can delete customers" 
ON public.tbl_customers 
FOR DELETE 
TO authenticated 
USING (true);

-- Create RLS policies for tbl_transactions
-- Only authenticated users can view transaction data
CREATE POLICY "Authenticated users can view transactions" 
ON public.tbl_transactions 
FOR SELECT 
TO authenticated 
USING (true);

-- Only authenticated users can insert transaction data
CREATE POLICY "Authenticated users can insert transactions" 
ON public.tbl_transactions 
FOR INSERT 
TO authenticated 
WITH CHECK (true);

-- Only authenticated users can update transaction data
CREATE POLICY "Authenticated users can update transactions" 
ON public.tbl_transactions 
FOR UPDATE 
TO authenticated 
USING (true) 
WITH CHECK (true);

-- Only authenticated users can delete transaction data
CREATE POLICY "Authenticated users can delete transactions" 
ON public.tbl_transactions 
FOR DELETE 
TO authenticated 
USING (true);

-- Revoke public access to ensure only authenticated users can access the data
REVOKE ALL ON public.tbl_customers FROM anon;
REVOKE ALL ON public.tbl_transactions FROM anon;

-- Grant appropriate permissions to authenticated users
GRANT SELECT, INSERT, UPDATE, DELETE ON public.tbl_customers TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.tbl_transactions TO authenticated;