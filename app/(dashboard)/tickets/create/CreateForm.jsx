
import { addTickets } from "../actions";
import SubmitButton from "@/app/components/SubmitButton";

export default function CreateForm() {


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);

  //   const newTicket = { title, body, priority };

  //   const res = await fetch("http://localhost:3000/api/tickets", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(newTicket),
  //   });

  //   const json = await res.json();

  //   if (json.error) {
  //     console.log(error.message);
  //   }
  //   if (json.data) {
  //     router.refresh();
  //     router.push("/tickets");
  //   }
  // };

  return (
    <form action={addTickets} className="w-1/2">
      <label>
        <span>Title:</span>
        <input
          name="title"
          required
          type="text"
        />
      </label>
      <label>
        <span>Body:</span>
        <textarea
          name="body"
          required
        />
      </label>
      <label>
        <span>Priority:</span>
        <select
          name="priority"
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </label>
     <SubmitButton />
    </form>
  );
}
