import { retrieveProducts } from '@/common/utils/db/serviceFirebase';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  status: boolean;
  status_code: number;
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const data = await retrieveProducts("Products");
  res.status(200).json({
    status: true,
    status_code: 200,
    data
  });
}