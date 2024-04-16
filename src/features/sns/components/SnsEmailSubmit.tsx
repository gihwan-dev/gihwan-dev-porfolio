const SnsEmailSubmit = () => {
  return (
    <form
      action={'mailto:rlghks3004@gmail.com'}
      className={'flex w-full max-w-xl flex-col gap-4 p-2'}
      method={'post'}
      encType={'text/plain'}
    >
      <button
        type={'submit'}
        className={
          'w-full rounded-sm bg-text-primary-red py-3 font-bold text-white transition-all duration-300 hover:opacity-80'
        }
      >
        Send email
      </button>
    </form>
  );
};

export default SnsEmailSubmit;
