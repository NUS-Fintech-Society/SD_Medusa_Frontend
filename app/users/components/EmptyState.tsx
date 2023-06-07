const EmptyState = () => {
  return (
    <div
      className="
                px-4
                py-10
                sm:px-6
                lg:px-8
                h-full
                flex
                justify-center
                items-center
                bg-gray-100
            "
    >
      <div
        className="
                    text-center
                    items-center
                    flex
                    flex-col
                "
      >
        <h3
          className="
                    mt-2
                    text-xl
                    font-semibold
                    text-gray-600
                "
        >
          Select a project from the left and play around with the features!
        </h3>
      </div>
    </div>
  );
};

export default EmptyState;
