import { AppDispatch } from 'app/providers/StoreProvider';
import { useDispatch } from 'react-redux';

export const useAppDidpatch = () => useDispatch<AppDispatch>();
