export { ValidateProfileError } from './model/types/editableProfileCardSchema';
// export type { ProfileSchema } from './model/types/editableProfileCardSchema';

// export { EditableProfileCard } from './ui/EditableProfileCard/EditableProfileCard';

export {
    profileActions,
    profileReducer,
} from './model/slice/ProfileSlice';

// export {
//     fetchProfileData,
// } from './model/services/fetchProfileData/fetchProfileData';

export {
    updateProfileData,
} from './model/services/updateProfileData/updateProfileData';

export { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading';
export { getProfileData } from './model/selectors/getProfileData/getProfileData';
export { getProfileError } from './model/selectors/getProfileError/getProfileError';
export { getProfileReadonly } from './model/selectors/getProfileReadonly/getProfileReadonly';
export { getProfileForm } from './model/selectors/getProfileForm/getProfileForm';
export { getProfileValidateError } from './model/selectors/getProfileValidateError/getProfileValidateError';

export { EditableProfileCard } from './ui/EditableProfileCard/EditableProfileCard';
export type { ProfileSchema } from './model/types/editableProfileCardSchema';
