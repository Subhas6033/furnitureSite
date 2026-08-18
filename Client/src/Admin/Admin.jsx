import React, { useEffect, useMemo, useState } from "react";
import {
  Check,
  X,
  MessageSquare,
  Clock,
} from "lucide-react";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom"
import { api } from "../API/reviewSlice";
import { updateReview } from "../API/adminSlice";

const Admin = () => {
  const dispatch = useDispatch();

  const [reviews, setReviews] = useState([]);
  const [loadingId, setLoadingId] = useState(null);
  const [fetching, setFetching] = useState(true);
  const navigate = useNavigate()

  // all | pending | accepted
  const [filter, setFilter] = useState("pending");

  /*
   * Fetch all reviews
   */
useEffect(() => {
  const fetchReviews = async () => {
    try {
      setFetching(true);

      const { data } = await api.get(
        "/api/v1/admin/get-all-reviews"
      );

      console.log("Reviews API response:", data);

      setReviews(
        Array.isArray(data?.data)
          ? data.data
          : []
      );
    } catch (error) {
      console.error(
        "Failed to fetch reviews:",
        error?.response?.data || error
      );

      if (error.response?.status === 401) {
        navigate("/admin/login", {
          replace: true,
        });
        return;
      }

      setReviews([]);
    } finally {
      setFetching(false);
    }
  };

  fetchReviews();
}, [navigate]);

  /*
   * Accept review
   */
const handleAccept = async (reviewId) => {
  try {
    setLoadingId(reviewId);

    const result = await dispatch(
      updateReview(reviewId)
    ).unwrap();

    console.log("Review accepted:", result);

    setReviews((prev) =>
      prev.map((review) =>
        review._id === reviewId
          ? {
              ...review,
              isAccepted: true,
            }
          : review
      )
    );
  } catch (error) {
    console.error(
      "Failed to accept review:",
      error
    );

    /*
     * If the admin session expired while
     * the page was open, send them to login.
     */
    if (
      error?.response?.status === 401 ||
      error?.statusCode === 401
    ) {
      navigate("/admin/login", {
        replace: true,
      });
    }
  } finally {
    setLoadingId(null);
  }
};

  /*
   * Filter reviews
   */
  const filteredReviews = useMemo(() => {
    switch (filter) {
      case "pending":
        return reviews.filter(
          (review) => !review.isAccepted
        );

      case "accepted":
        return reviews.filter(
          (review) => review.isAccepted
        );

      case "all":
      default:
        return reviews;
    }
  }, [reviews, filter]);

  /*
   * Statistics
   */
  const pendingCount = reviews.filter(
    (review) => !review.isAccepted
  ).length;

  const acceptedCount = reviews.filter(
    (review) => review.isAccepted
  ).length;

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-8">
          <p className="mb-1 text-sm font-medium text-slate-500">
            Administration
          </p>

          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Reviews
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage submitted reviews and control which reviews
            are visible to users.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">

          {/* Pending */}
          <button
            type="button"
            onClick={() => setFilter("pending")}
            className={`rounded-xl border bg-white p-5 text-left shadow-sm transition ${
              filter === "pending"
                ? "border-amber-300 ring-2 ring-amber-100"
                : "border-slate-200 hover:border-slate-300"
            }`}
          >
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-slate-500">
                  Pending Reviews
                </p>

                <p className="mt-2 text-2xl font-bold text-slate-900">
                  {pendingCount}
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                <Clock size={20} />
              </div>

            </div>
          </button>

          {/* Accepted */}
          <button
            type="button"
            onClick={() => setFilter("accepted")}
            className={`rounded-xl border bg-white p-5 text-left shadow-sm transition ${
              filter === "accepted"
                ? "border-emerald-300 ring-2 ring-emerald-100"
                : "border-slate-200 hover:border-slate-300"
            }`}
          >
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-slate-500">
                  Accepted Reviews
                </p>

                <p className="mt-2 text-2xl font-bold text-slate-900">
                  {acceptedCount}
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <Check size={20} />
              </div>

            </div>
          </button>

          {/* Total */}
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`rounded-xl border bg-white p-5 text-left shadow-sm transition ${
              filter === "all"
                ? "border-blue-300 ring-2 ring-blue-100"
                : "border-slate-200 hover:border-slate-300"
            }`}
          >
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-slate-500">
                  Total Reviews
                </p>

                <p className="mt-2 text-2xl font-bold text-slate-900">
                  {reviews.length}
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <MessageSquare size={20} />
              </div>

            </div>
          </button>

        </div>

        {/* Reviews Section */}
        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

          {/* Section Header */}
          <div className="flex flex-col gap-4 border-b border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <h2 className="font-semibold text-slate-900">
                {filter === "pending" && "Pending Reviews"}
                {filter === "accepted" && "Accepted Reviews"}
                {filter === "all" && "All Reviews"}
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                {filter === "pending" &&
                  "Review submitted feedback that is waiting for approval."}

                {filter === "accepted" &&
                  "Reviews that have been approved and published."}

                {filter === "all" &&
                  "View all submitted reviews."}
              </p>
            </div>

            {/* Filter */}
            <div className="flex rounded-lg border border-slate-200 bg-slate-50 p-1">

              <button
                type="button"
                onClick={() => setFilter("all")}
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${
                  filter === "all"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                All
              </button>

              <button
                type="button"
                onClick={() => setFilter("pending")}
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${
                  filter === "pending"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                Pending
              </button>

              <button
                type="button"
                onClick={() => setFilter("accepted")}
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${
                  filter === "accepted"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                Accepted
              </button>

            </div>
          </div>

          {/* Loading */}
          {fetching ? (
            <div className="flex flex-col items-center justify-center px-5 py-16 text-center">

              <div className="mb-4 h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-slate-900" />

              <p className="text-sm text-slate-500">
                Loading reviews...
              </p>

            </div>
          ) : filteredReviews.length === 0 ? (

            /* Empty */
            <div className="flex flex-col items-center justify-center px-5 py-16 text-center">

              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                <MessageSquare size={22} />
              </div>

              <h3 className="font-semibold text-slate-900">
                {filter === "pending"
                  ? "No pending reviews"
                  : filter === "accepted"
                    ? "No accepted reviews"
                    : "No reviews found"}
              </h3>

              <p className="mt-1 max-w-sm text-sm text-slate-500">
                {filter === "pending"
                  ? "All submitted reviews have been processed."
                  : filter === "accepted"
                    ? "No reviews have been accepted yet."
                    : "There are currently no reviews to display."}
              </p>

            </div>
          ) : (

            /* Review List */
            <div className="divide-y divide-slate-100">

              {filteredReviews.map((review) => {

                const isLoading =
                  loadingId === review._id;

                const initials =
                  review.userName
                    ?.split(" ")
                    .map((name) => name[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase() || "U";

                return (
                  <article
                    key={review._id}
                    className="p-5 transition hover:bg-slate-50/70"
                  >

                    <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

                      {/* Review Content */}
                      <div className="min-w-0 flex-1">

                        {/* User */}
                        <div className="flex items-start gap-3">

                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                            {initials}
                          </div>

                          <div className="min-w-0">

                            <h3 className="font-semibold text-slate-900">
                              {review.userName}
                            </h3>

                            <p className="text-xs text-slate-500">
                              {review.email}
                            </p>

                          </div>

                        </div>

                        {/* Review */}
                        <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600">
                          {review.review}
                        </p>

                        {/* Status */}
                        <div className="mt-3 flex flex-wrap items-center gap-2">

                          <span
                            className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                              review.isAccepted
                                ? "bg-emerald-50 text-emerald-700"
                                : "bg-amber-50 text-amber-700"
                            }`}
                          >
                            {review.isAccepted
                              ? "Accepted"
                              : "Pending"}
                          </span>

                          <span className="text-xs text-slate-400">
                            Submitted{" "}
                            {new Date(
                              review.createdAt
                            ).toLocaleDateString()}
                          </span>

                        </div>

                      </div>

                      {/* Actions */}
                      {!review.isAccepted && (
                        <div className="flex shrink-0 gap-2">

                          <button
                            type="button"
                            disabled={isLoading}
                            onClick={() =>
                              handleAccept(
                                review._id
                              )
                            }
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
                          >

                            {isLoading ? (
                              <>
                                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                Accepting...
                              </>
                            ) : (
                              <>
                                <Check size={16} />
                                Accept
                              </>
                            )}

                          </button>

                          <button
                            type="button"
                            disabled
                            title="Reject endpoint is not implemented yet"
                            className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-red-200 bg-white px-4 py-2 text-sm font-medium text-red-400 opacity-60"
                          >
                            <X size={16} />
                            Reject
                          </button>

                        </div>
                      )}

                    </div>

                  </article>
                );
              })}

            </div>
          )}

        </section>
      </main>
    </div>
  );
};

export default Admin;