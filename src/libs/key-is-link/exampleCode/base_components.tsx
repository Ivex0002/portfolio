import { useState, type ReactNode } from "react";
import type { PostForm } from "./typeLink";

interface WidgetWrapperProps {
  label: string;
  children: ReactNode;
}
export function WidgetWrapper({ label, children }: WidgetWrapperProps) {
  return (
    <div className="widget-wrapper">
      <h4 style={{ marginBottom: "10px", color: "#333" }}>{label}</h4>
      {children}
    </div>
  );
}

async function withErrorHandling<T>(fn: () => Promise<T>): Promise<T | null> {
  try {
    return await fn();
  } catch (error) {
    console.error(error);
    return null;
  }
}

type ReqFn<T> = () => Promise<T>;

interface ReqWidgetProps<T> {
  reqFn: ReqFn<T>;
}

export function ReqWidget<T>({ reqFn }: ReqWidgetProps<T>) {
  const [res, setRes] = useState<T | string | null>("요청 버튼을 눌러보세요");
  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    setLoading(true);
    const result = await withErrorHandling<T>(reqFn);
    setRes(result);
    setLoading(false);
  };

  return (
    <div className="req-widget">
      <div className="res">
        {loading ? "로딩 중..." : JSON.stringify(res, null, 2)}
      </div>
      <button className="btn" onClick={onClick}>
        요청
      </button>
    </div>
  );
}

function useIdState(initialId: number = 1) {
  const [id, setId] = useState<number>(initialId);

  const onIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(Number(e.target.value));
  };

  return [id, onIdChange] as const;
}

interface IdWidgetProps<T> {
  reqFn: (id: number) => Promise<T>;
}

export function IdWidget<T>({ reqFn }: IdWidgetProps<T>) {
  const [id, onIdChange] = useIdState(1);

  return (
    <div className="id-widget">
      <label>
        post_id
        <input type="number" value={id} onChange={onIdChange} />
      </label>
      <ReqWidget reqFn={() => reqFn(id)} />
    </div>
  );
}

function useBodyState<B extends Partial<PostForm>>(initialBody: B) {
  const [body, setBody] = useState<B>(initialBody);

  const onBodyChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const name = e.target.name as keyof B;
    const value = e.target.value;

    setBody((prev) => ({
      ...prev,
      [name]: name === "userId" ? Number(value) : value,
    }));
  };

  return [body, onBodyChange] as const;
}

function BodyForm<B extends Partial<PostForm>>({
  body,
  onChange,
}: {
  body: B;
  onChange: ReturnType<typeof useBodyState<B>>[1];
}) {
  return (
    <ul>
      <li>
        <label>
          title
          <input name="title" value={body.title ?? ""} onChange={onChange} />
        </label>
      </li>
      <li>
        <label>
          body
          <textarea name="body" value={body.body ?? ""} onChange={onChange} />
        </label>
      </li>
      <li>
        <label>
          user_id
          <input
            type="number"
            name="userId"
            value={body.userId ?? 0}
            onChange={onChange}
          />
        </label>
      </li>
    </ul>
  );
}

interface BodyWidgetProps<T, B extends Partial<PostForm>> {
  reqFn: (body: Partial<PostForm>) => Promise<T>;
  initialBody: B;
}

export function BodyWidget<T, B extends Partial<PostForm>>({
  reqFn,
  initialBody,
}: BodyWidgetProps<T, B>) {
  const [body, onBodyChange] = useBodyState(initialBody);

  return (
    <div className="body-widget">
      <BodyForm body={body} onChange={onBodyChange} />
      <ReqWidget reqFn={() => reqFn(body)} />
    </div>
  );
}

interface BodyWithIdWidgetProps<T, B extends Partial<PostForm>> {
  reqFn: (id: number, body: B) => Promise<T>;
  initialBody: B;
}

export function BodyWithIdWidget<T, B extends Partial<PostForm>>({
  reqFn,
  initialBody,
}: BodyWithIdWidgetProps<T, B>) {
  const [id, onIdChange] = useIdState(1);
  const [body, onBodyChange] = useBodyState(initialBody);

  return (
    <div className="body-id-widget">
      <label>
        post_id
        <input type="number" value={id} onChange={onIdChange} />
      </label>
      <BodyForm body={body} onChange={onBodyChange} />
      <ReqWidget reqFn={() => reqFn(id, body)} />
    </div>
  );
}
